import { POST } from "@/app/api/contact/route";
import nodemailer from "nodemailer";

jest.mock("nodemailer", () => ({
  createTransport: jest.fn().mockReturnValue({
    sendMail: jest.fn().mockResolvedValue({ messageId: "test-id" }),
  }),
}));

describe("POST /api/contact", () => {
  it("returns 200 when all fields are provided", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        company: "Acme",
        message: "Hello!",
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });

  it("returns 500 when nodemailer throws", async () => {
    const mockTransporter = (nodemailer.createTransport as jest.Mock).mock.results[0].value;
    mockTransporter.sendMail.mockRejectedValueOnce(new Error("SMTP error"));

    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        company: "Acme",
        message: "Hello!",
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(500);
  });
});
