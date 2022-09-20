const ChildComponent = ({ name, surname }) => { return (
    <div>
        {name ? (
        <h3>
        O parâmetro <code>name</code> na
        <i>query string</i> é &quot;{name}&quot; <br />
        </h3>
        ) : (
        <h3>
        Não há nenhum nome na <i>query string</i> <br />
        </h3>
        )}
        {surname ? (
        <h3>
        O parâmetro <code>surname</code> na
        <i>query string</i> é &quot;{surname}&quot;
        </h3>
        ) : (
        <h3>
        Não há nenhum sobrenome na <i>query string</i>
        </h3>
        )}
    </div>
    );
    };
    
    export default ChildComponent;