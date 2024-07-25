require("dotenv").config({ path: __dirname + "/../.env" });

const base_url_pessoa = "https://api.invertexto.com/v1/faker";
const base_url_cnpj = "https://api.invertexto.com/v1/cnpj/";
const fields = ["name", "cnpj", "email", "phone_number", "credit_card"];
const locale = "pt_BR";

async function obter_pessoa_ficticia() {
    const response_pessoa = await fetch(
        base_url_pessoa +
        "?token=" +
        process.env.TOKEN +
        "&fields=" +
        fields.join("%2C") +
        "&locale=" +
        locale,
    );
    const json_response_pessoa = await response_pessoa.json();

    // Pré-processamento dos dados
    // ------------------------------------------------------------------------
    json_response_pessoa["name"] = json_response_pessoa["name"]
        .replace('ç', 'c');

    json_response_pessoa["email"] =
        json_response_pessoa["email"] == null
            ? "sem_email@email.com"
            : json_response_pessoa["email"];

    json_response_pessoa["cnpj"] = json_response_pessoa["cnpj"]
        .split(".")
        .join("")
        .replace("/", "")
        .replace("-", "");

    json_response_pessoa["credit_card"]["number"] =
        json_response_pessoa["credit_card"]["number"].length != 16 
            ? '0000000000000000'
            : json_response_pessoa["credit_card"]["number"];

    json_response_pessoa["credit_card"]["expiration"] =
        json_response_pessoa["credit_card"]["expiration"]
            .replace("/", "/20");
    // ------------------------------------------------------------------------

    const response_endereco = await fetch(
        base_url_cnpj +
        json_response_pessoa["cnpj"] +
        "?token=" +
        process.env.TOKEN,
    );
    const json_response_endereco = await response_endereco.json();

    return Object.assign({}, json_response_endereco, json_response_pessoa);
}

module.exports = { obter_pessoa_ficticia };
