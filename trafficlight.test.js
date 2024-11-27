const app = require("./trafficlight");

describe("Traffic Light Function Tests", () => {
    it("should return 'OUT OF ORDER' if no argument is provided", () => {
        expect(app.trafficLight()).toBe("OUT OF ORDER");
    });

    it("should return 'DON'T WALK!' for red light", () => {
        expect(app.trafficLight("red")).toBe("DON'T WALK!");
    });

    it("should return 'ATTENTION!' for orange light", () => {
        expect(app.trafficLight("orange")).toBe("ATTENTION!");
    });

    it("should return 'WALK!' for green light", () => {
        expect(app.trafficLight("green")).toBe("WALK!");
    });

    it("should return 'INVALID COLOR' for an unrecognized color", () => {
        expect(app.trafficLight("blue")).toBe("INVALID COLOR");
    });
});
