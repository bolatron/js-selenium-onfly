const {
    Builder,
    By,
    until,
    StaleElementReferenceError,
} = require("selenium-webdriver");


(async function main() {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
        await driver.get("https://onfly-rpa-forms-62njbv2kbq-uc.a.run.app/");

        let MAX_FORMS = 10;
        let i = 0;
        while (i < MAX_FORMS) {
            try {

                // Primeira parte
                let nome_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[1]/div[1]/input"),
                );
                await driver.wait(until.elementIsVisible(nome_input), 10000);
                nome_input.sendKeys("Teste Teste");

                let telefone_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[1]/div[2]/input"),
                );
                await driver.wait(until.elementIsVisible(telefone_input), 1000);
                telefone_input.sendKeys("(31) 993193521");

                let email_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[1]/div[3]/input"),
                );
                await driver.wait(until.elementIsVisible(email_input), 1000);
                email_input.sendKeys("email@email.com");

                await driver.findElement(By.id("next-btn")).click();

                // Segunda parte
                let cep_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[2]/div[1]/input"),
                );
                await driver.wait(until.elementIsVisible(cep_input), 1000);
                cep_input.sendKeys("36301266");

                let endereco_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[2]/div[2]/input"),
                );
                await driver.wait(until.elementIsVisible(endereco_input), 1000);
                endereco_input.sendKeys("Rua teste da silva");

                let cidade_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[2]/div[3]/input"),
                );
                await driver.wait(until.elementIsVisible(cidade_input), 1000);
                cidade_input.sendKeys("Belo Horizonte");

                let estado_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[2]/div[4]/input"),
                );
                await driver.wait(until.elementIsVisible(estado_input), 1000);
                estado_input.sendKeys("MG");

                await driver.findElement(By.id("next-btn")).click();

                // Terceira parte
                let nome_cartao_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[3]/div[1]/input"),
                );
                await driver.wait(until.elementIsVisible(nome_cartao_input), 1000);
                nome_cartao_input.sendKeys("Teste Teste");

                let numero_cartao_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[3]/div[2]/input"),
                );
                await driver.wait(until.elementIsVisible(numero_cartao_input), 1000);
                numero_cartao_input.sendKeys("3746286795568091");

                let validade_cartao_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[3]/div[3]/input"),
                );
                await driver.wait(until.elementIsVisible(validade_cartao_input), 1000);
                validade_cartao_input.sendKeys("12/2025");

                let cvv_cartao_input = await driver.findElement(
                    By.xpath("/html/body/div/div[2]/form/div[3]/div[4]/input"),
                );
                await driver.wait(until.elementIsVisible(cvv_cartao_input), 1000);
                cvv_cartao_input.sendKeys("331");

                await driver.findElement(By.id("next-btn")).click();

            } catch (err) {
                if (typeof err == StaleElementReferenceError) {
                    driver.navigate().refresh();
                }
            }
            i = i + 1;
        }
    } finally {
        await driver.quit();
    }
})();
  