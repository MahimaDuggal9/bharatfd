const request = require("supertest");
const app = require("../server"); 
const mongoose = require("mongoose");

describe("FAQ API Tests", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("Should fetch all FAQs", async () => {
    const res = await request(app).get("/api/faqs/");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Should fetch FAQs in Hindi", async () => {
    const res = await request(app).get("/api/faqs/?lang=hi");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Should return 404 for unknown route", async () => {
    const res = await request(app).get("/api/unknown");
    expect(res.status).toBe(404);
  });
});
