import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component {

  // Replaced by Consumer
  // static contextType = LanguageContext;

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => {
          return (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                { ({language}) => this.renderSubmit(language) }
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColorContext.Consumer>
    );
  }
}

// optionally:
// Button.contextType = LanguageContext;


export default Button;
