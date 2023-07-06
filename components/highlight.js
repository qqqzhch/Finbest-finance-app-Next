import React from 'react'

import PropTypes from 'prop-types'

const Highlight = (props) => {
  return (
    <>
      <div className="highlight-highlight">
        <span className="highlight-text">{props.Description}</span>
      </div>
      <style jsx>
        {`
          .highlight-highlight {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .highlight-text {
            max-width: 535px;
            font-family: Poppins;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

Highlight.defaultProps = {
  Description:
    'Value Router that not only for the crypto native assets, but is ready for the RWA from permissioned pools or securities trading based on certain attributes, such as accredited investor status',
  Title: 'Value Router',
}

Highlight.propTypes = {
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Highlight
