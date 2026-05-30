import { calculateAge } from "@/utils/calculateAge";

describe("calculateAge", () => {
  it("returns correct age when birthday has passed this year", () => {
    jest.useFakeTimers().setSystemTime(new Date("2025-06-15"));
    expect(calculateAge("29-01-1993")).toBe(32);
    jest.useRealTimers();
  });

  it("returns correct age when birthday has not passed yet this year", () => {
    jest.useFakeTimers().setSystemTime(new Date("2025-01-01"));
    expect(calculateAge("29-01-1993")).toBe(31);
    jest.useRealTimers();
  });

  it("handles birthday today correctly", () => {
    jest.useFakeTimers().setSystemTime(new Date("2025-01-29"));
    expect(calculateAge("29-01-1993")).toBe(32);
    jest.useRealTimers();
  });
});
