const {
    Builder,
    By,
    until,
    NoSuchSessionError,
} = require("selenium-webdriver");


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function altera_elementos_por_tag(driver, tag_name, text) {
    let p_elements = await driver.findElements(By.tagName(tag_name));

    for (let e of p_elements) {
        driver.executeScript("arguments[0].innerHTML = arguments[1]", e, text);
        await driver.wait(until.elementTextIs(e, text), 1000);
    }
}


(async function main() {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
        await driver.get("https://mingwpy.github.io/background-mingw.html");
        altera_elementos_por_tag(driver, "p", "Texto alterado");
    } catch (err) {
        if (typeof err == NoSuchSessionError) await driver.close();
    }
})();