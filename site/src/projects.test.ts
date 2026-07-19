import { describe, expect, test } from "bun:test";
import { projects } from "./projects.ts";

describe("projects roster", () => {
  test("is non-empty", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  test("every project has the required fields", () => {
    for (const project of projects) {
      expect(project.name).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.repo).toBeTruthy();
      expect(project.logo).toBeTruthy();
    }
  });

  test("every repo and optional site is an https URL", () => {
    for (const project of projects) {
      expect(project.repo).toStartWith("https://");
      if (project.site !== undefined) {
        expect(project.site).toStartWith("https://");
      }
    }
  });

  test("project names are unique", () => {
    const names = projects.map((project) => project.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
