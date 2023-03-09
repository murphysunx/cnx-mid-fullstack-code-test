import fs from "fs";
import { isEqual } from "lodash";
import path from "path";
import request from "supertest";
import app from "../../src/app";
import { IDealer } from "../../src/entities/Dealer";
import { IVechicle } from "../../src/entities/Vehicles";

describe("test app", () => {
  it("app", () => {
    expect(app).toBeTruthy();
  });

  it("app include /dealers route", () => {
    const routes: any[] = app._router.stack.map((layer) => layer?.route?.path);
    expect(routes.includes("/dealers")).toBeTruthy();
  });

  it("app include /vehicles/:bac route", () => {
    const routes: any[] = app._router.stack.map((layer) => layer?.route?.path);
    expect(routes.includes("/vehicles/:bac")).toBeTruthy();
  });

  it("/dealers returns all dealers", async () => {
    const response = await request(app)
      .get("/dealers")
      .set("Accept", "applition/json");
    expect(response.header["content-type"]).toMatch(/json/);
    expect(response.status).toBe(200);
    // load all dealers from given data set
    const dealersFromFile: IDealer[] = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname + "/../../data/", "dealers.json"),
        "utf-8"
      )
    );
    const dealersFromServer: IDealer[] = response.body;
    expect(isEqual(dealersFromFile, dealersFromServer)).toBeTruthy();
    // expect(dealersFromFile.length === dealersFromServer.length).toBeTruthy();
    // for (let i = 0; i < dealersFromServer.length; i++) {
    //   const dealerFromFile = dealersFromFile[i];
    //   const dealerFromServer = dealersFromServer[i];
    //   expect(isEqual(dealerFromFile, dealerFromServer)).toBeTruthy();
    // }
  });

  it("/vehicles/:bac returns corresponding vehicles", async () => {
    // load all dealers from given data set
    const dealersFromFile: IDealer[] = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname + "/../../data/", "dealers.json"),
        "utf-8"
      )
    );
    // load all vehicles from given data set
    const vehiclesFromFile: IVechicle[] = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname + "/../../data", "vehicles.json"),
        "utf-8"
      )
    );
    const getVehiclesByBacFromFile = (bac: string) => {
      return vehiclesFromFile.filter((vehicle) => vehicle.bac === bac);
    };
    const dealersBacSet = new Set(dealersFromFile.map((dealer) => dealer.bac));
    for (let bac of dealersBacSet) {
      const response = await request(app)
        .get(`/vehicles/${bac}`)
        .set("Accept", "application/json");
      expect(response.header["content-type"]).toMatch(/json/);
      expect(response.status).toBe(200);
      const vehiclesByBacFromFile = getVehiclesByBacFromFile(bac);
      const vehiclesByBacFromServer: IVechicle[] = response.body;
      expect(
        isEqual(vehiclesByBacFromFile, vehiclesByBacFromServer)
      ).toBeTruthy();
    }
  });
});
