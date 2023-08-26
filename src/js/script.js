import '../css/main.scss';

class MagentoEnvContentProcesser {
    constructor() {
        this.inputText = "";
        this.outputText = {};
    }

    setInputText(inputText) {
        this.inputText = inputText;
        this.outputText = this._processText();
    }

    getOutputText() {
        return this.outputText;
    }

    _processText() {
        return {
            host: this.extractValueFromPHPCode(this.inputText, "host"),
            dbname: this.extractValueFromPHPCode(this.inputText, "dbname"),
            password: this.extractValueFromPHPCode(this.inputText, "password"),
            username: this.extractValueFromPHPCode(this.inputText, "username"),
        };
    }

    extractValueFromPHPCode(code, key) {
        const regex = new RegExp("'" + key + "'\\s*=>\\s*'([^']*)'");
        const match = code.match(regex);
        return match ? match[1] : null;
    }
}

$(document).ready(function () {

    const storeKey = "phpCode";

    // read from local storage, and fill to element
    const phpCode = localStorage.getItem(storeKey);

    if (phpCode) {
        $("#input-text").val(phpCode);

        setTimeout(() => {
            $("#readButton").click();
        }, 200)
    }

    $("#input-text").keypress(function (e) {
        if (e.which == 13) {
            $("#readButton").click();
        }
    });

    $("#readButton").click(function () {
        const phpCode = $("#input-text").val();

        // store the value to local storage
        localStorage.setItem(storeKey, phpCode);

        const magentoEnvContentProcesser = new MagentoEnvContentProcesser();
        magentoEnvContentProcesser.setInputText(phpCode);
        const outputText = magentoEnvContentProcesser.getOutputText();
        const { host, dbname, password, username } = outputText;

        const sql = `mysql -u$<span style="color:#cf1666">{username}</span> -p"<span style="color:#cf1666">${password}</span>" -h<span style="color:#cf1666">${host}</span> <span style="color:#cf1666">${dbname}</span>`;

        const sqldump = `mysqldump -u<span style="color:#cf1666">${username}</span> -h<span style="color:#cf1666">${host}</span> -p"<span style="color:#cf1666">${password}</span>" <span style="color:#cf1666">${dbname}</span> --routines --force --triggers --single-transaction --opt --skip-lock-tables --no-tablespaces | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\\*/\\*/' > ${dbname}.sql`;

        if (!host) {
            return;
        }

        $("#mysql-conntact").html(sql);

        $("#mysql-dump").html(sqldump);
    });
});
