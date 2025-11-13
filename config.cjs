module.exports = {
    ci: {
        collect: {
            numberOfRuns: 1,
            settings: {
                formFactor: "desktop",
                throttlingMethod: "devtools",
                throttling: {
                    rttMs: 40,
                    throughputKbps: 12000,
                    downloadThroughputKbps: 12000,
                    uploadThroughputKbps: 3000,
                    cpuSlowdownMultiplier: 1
                },
                screenEmulation: {
                    width: 1920,
                    height: 1080,
                    deviceScaleRatio: 1,
                    mobile: false
                },
                onlyCategories: ["performance"],
                chromeFlags: "--disable-gpu --window-size=1920,1080"
            }
        }
    }
};
