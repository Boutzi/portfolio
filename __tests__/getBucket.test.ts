import { fetchDataFromBucket } from "@/utils/getBucket";

const mockData = {
  skills: ["TypeScript", "Python", "SQL"],
};

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  process.env.NEXT_PUBLIC_S3_BUCKET_URL = "https://joe-portfolio-data.s3.eu-west-3.amazonaws.com";
});

describe("fetchDataFromBucket", () => {
  it("returns the correct object key from bucket data", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await fetchDataFromBucket("en", "config", "skills");
    expect(result).toEqual(["TypeScript", "Python", "SQL"]);
  });

  it("calls fetch with the correct URL", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    await fetchDataFromBucket("en", "config", "skills");
    expect(global.fetch).toHaveBeenCalledWith("https://joe-portfolio-data.s3.eu-west-3.amazonaws.com/en/config.json");
  });

  it("throws when fetch fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchDataFromBucket("en", "config", "skills")).rejects.toThrow("Network error");
  });
});
