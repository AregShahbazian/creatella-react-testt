import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.css"

let Product = ({id, face, price, size, date}) => {
    let dateFormatted = "3 days ago"

    return <div className={styles.product}>
        <div className={styles.face} style={{fontSize: size}}>{face}</div>
        <div>
            <div className={styles.price}>${price}</div>
            <div className={styles.date}>{dateFormatted}</div>
        </div>
    </div>
}

Product.propTypes = {
    face: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
}

export default Product
