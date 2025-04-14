import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <Link to="/staff"><h1>Form Flow</h1></Link>
    </div>
  );
}
