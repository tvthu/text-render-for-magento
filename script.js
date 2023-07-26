document.getElementById('readButton').addEventListener('click', function () {
    const phpCode = document.getElementById('inputText').value;
    
     // Function to extract values from the PHP code using regular expressions
     function extractValueFromPHPCode(code, key) {
        const regex = new RegExp("'" + key + "'\\s*=>\\s*'([^']*)'");
        const match = code.match(regex);
        return match ? match[1] : null;
    }

    // Extract the values for 'host' and 'dbname' from the PHP code
    const host = extractValueFromPHPCode(phpCode, 'host');
    const dbname = extractValueFromPHPCode(phpCode, 'dbname');
    const password = extractValueFromPHPCode(phpCode, 'password');
    const username = extractValueFromPHPCode(phpCode, 'username');

    const sql = `mysql -u${username} -p"${password}" -h${host} ${dbname}`;

    const sqldump = `mysqldump -u${username} -h${host} -p"${password}" ${dbname} --routines --force --triggers --single-transaction --opt --skip-lock-tables --no-tablespaces | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' > ${dbname}.sql`

    // replate html of id #mysql-conntact
    document.getElementById('mysql-conntact').innerHTML = sql;

    // replace html of if id #mysql-dump
    document.getElementById('mysql-dump').innerHTML = sqldump;

});
