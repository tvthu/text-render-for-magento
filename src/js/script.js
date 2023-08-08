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

    // read from local storage, and fill to element
    const phpCode = localStorage.getItem("phpCode");

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
    })

    $("#readButton").click(function () {
        const phpCode = $("#input-text").val();

        // store the value to local storage
        localStorage.setItem("phpCode", phpCode);

        const magentoEnvContentProcesser = new MagentoEnvContentProcesser();
        magentoEnvContentProcesser.setInputText(phpCode);
        const outputText = magentoEnvContentProcesser.getOutputText();
        const { host, dbname, password, username } = outputText;

        const sql = `mysql -u${username} -p"${password}" -h${host} ${dbname}`;

        const sqldump = `mysqldump -u${username} -h${host} -p"${password}" ${dbname} --routines --force --triggers --single-transaction --opt --skip-lock-tables --no-tablespaces | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\\*/\\*/' > ${dbname}.sql`;

        $("#mysql-conntact").html(sql);

        $("#mysql-dump").html(sqldump);
    });
});
