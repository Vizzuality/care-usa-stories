import React, { Children }  from 'react';

function TextContent({ children }) {
  const content = Children.map(children, (child, i) => {
    if (typeof child === 'string') {
      const [textContent, ...bulletPoints] = child.split('- ');
      return [
        <div className="std" key={`main-text-content${i}`}>
          {
            textContent.split('\n').map((paragraph, i) => (
              <p key={i + paragraph}>{paragraph}</p>
            ))
          }
        </div>,
        <div className="std list" key={`list-text-content${i}-${textContent}`}>
          <ul>
            {
              bulletPoints.map(bulletPoint => (
                <li key={bulletPoint}>
                  {bulletPoint}
                </li>
              ))
            }
          </ul>
        </div>
      ]
    }
    return child;
  });
  return content || [];
}

export default TextContent;
