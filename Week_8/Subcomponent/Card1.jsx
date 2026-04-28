import React from "react";

function Card1(props) {
    // ✅ Fixed: Removed duplicate 'branch', added 'image'
    const { name, branch, year, image } = props;
    
    return (
        <div style={styles.card}>
            <img
                src={image}
                alt={name}
                style={styles.image}
            />
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.info}>📚 Branch: {branch}</p>
            <p style={styles.info}>📅 Year: {year}</p>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white'
    },
    image: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px'
    },
    name: {
        color: '#333',
        marginBottom: '10px'
    },
    info: {
        color: '#666',
        margin: '5px 0'
    }
};

export default Card1;