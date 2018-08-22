import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Calendar extends React.Component {
  renderCalendar() {
    const { name } = this.props;

    return (
      <div className="calendar">
        <header>
          <h2>Welcome {name}</h2>
          <nav>
            <ul>
              <il>
                <a>Edit</a>
              </il>
              <li>
                <Link to="/login">Logout</Link>
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

  render() {
    const { user: { isAuthenticated } } = this.props;

    return isAuthenticated ? this.renderCalendar() : <Redirect to="/login" />;
  }
}
