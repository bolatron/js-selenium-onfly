const {
    Builder,
    Browser,
    By,
    until,
    NoSuchSessionError,
} = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');


async function altera_elementos_por_tag(driver, tag_name, text) {
    let p_elements = await driver.findElements(By.tagName(tag_name));

    for (let e of p_elements) {
        driver.executeScript("arguments[0].innerHTML = arguments[1]", e, text);
        await driver.wait(until.elementTextIs(e, text), 1000);
    }
}


(async function main() {

    const serviceBuilder = new firefox.ServiceBuilder(__dirname + "/../bin/geckodriver");
    let driver = await new Builder()
        .forBrowser(Browser.FIREFOX)
        .setFirefoxService(serviceBuilder)
        .build();

    try {
        await driver.get("https://mingwpy.github.io/background-mingw.html");
        altera_elementos_por_tag(driver, "p", "Texto alterado");
    } catch (err) {
        if (typeof err == NoSuchSessionError) await driver.close();
    }
})();