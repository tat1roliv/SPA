import { Link, useLocation } from 'react-router-dom';
 import ChildComponent from './ChildComponent';

const QueryParams = () => {
let query = new URLSearchParams(useLocation(). search);
return (
<div className="container">
<h1>Requisições de query</h1>
<div className="showcase">
<ul>
<li>
<Link to="/ teste?name=Kylo&surname=Ren">Kylo Ren</Link>
</li>
<li>
<Link to="/teste?name=Rey">Rey</Link>
</li>
</ul>
<ChildComponent name={query.get('name')} surname={query.get('surname')}
/>
</div>
</div>
);
};

export default QueryParams;