import PropTypes from 'prop-types';

function QuoteCard({ quoteElement }){
    const { id, imageUrl, text, author, date} = quoteElement;

    return(
        <li className="quote" key={id}>
                    <div className='image-container'>
                        <img className="quote__image" src={imageUrl}/>
                        <div className="quote-container">
                            <h4 className="quote__text">
                            {text}
                            </h4>
                            <span className="quote__author">
                            {author}
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="quote__date">
                            {date}
                        </span>
                    </div>
                    <div className="quote__bookmark">
                        <i className="quote_bookmark-icon"></i>
                    </div>
                  </li>  
    )
}

export default QuoteCard;

QuoteCard.propTypes = {
    quoteElement: {
        id: PropTypes.string,
        imageUrl: PropTypes.string,
        text: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.any,
    },
};