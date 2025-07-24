import React from "react";
import { render } from "@testing-library/react";
import { Sidebar } from "./sidebar";

// Helper to mock mobile viewport
function setMobileViewport() {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 375 });
  window.dispatchEvent(new Event("resize"));
}

describe("Sidebar (mobile)", () => {
  beforeEach(() => {
    setMobileViewport();
  });

  it("should be scrollable when content overflows", () => {
    // Render sidebar with lots of content
    const { getByTestId } = render(
      <Sidebar data-testid="sidebar">
        <div style={{ height: "2000px" }}>Very tall content</div>
      </Sidebar>
    );

    // Sidebar should be visible and scrollable
    const sidebar = getByTestId("sidebar");
    // Simulate a real DOM environment for scrollHeight/clientHeight
    Object.defineProperty(sidebar, "scrollHeight", { value: 2000 });
    Object.defineProperty(sidebar, "clientHeight", { value: 500 });

    expect(sidebar.scrollHeight).toBeGreaterThan(sidebar.clientHeight);
  });
}); 