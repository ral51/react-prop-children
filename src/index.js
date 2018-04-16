import React from 'react';
import ReactDOM from 'react-dom';

function FancyBorder(props) { 

	const childrenWithWrapperDiv = React.Children.map(props.children, child => {
      return (
        <div className="special-class">{child}</div> 
      );
    });

	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
		{childrenWithWrapperDiv}
		</div>
		);

}

class WelcomeDialog extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FancyBorder color={this.props.color}>
      	<ul>
	        <li>List Item 1</li>
	        <li>List Item 2</li>
        </ul>
        <ul>
	        <li>List Item 3</li>
	        <li>List Item 4</li>
        </ul>
      </FancyBorder>
    );
  }
}

ReactDOM.render(
  <WelcomeDialog color={'red'}/>,
  document.getElementById('root')
);



