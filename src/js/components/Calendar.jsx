import React from 'react';
import { Link } from 'react-router-dom';

export default class Calendar extends React.Component {
  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    const { history } = this.props;
    console.log(history, 'historu');
    history.replace('/login');
  }

  render() {
    const userName = localStorage.getItem('user');

    return (
      <div className="calendar">
        <header>
          <h2>Welcome {userName}</h2>
          <nav>
            <ul>
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a href="#" onClick={this.handleLogOut}>Logout</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <div>Calendar</div>
        </main>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}
