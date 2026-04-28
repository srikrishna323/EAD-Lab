import React from "react";
import Card1 from './Subcomponent/Card1';

function Propexample() {
    const Student = [
        {
            id: 1,
            name: "Krishna",
            branch: "IT",
            year: "2nd Year",
            image: "https://via.placeholder.com/150/FF5733/white?text=Krishna"
        },
        {
            id: 2,
            name: "Vishnu",
            branch: "IT",
            year: "2nd Year",
            image: "https://via.placeholder.com/150/33FF57/white?text=Vishnu"
        },
        {
            id: 3,
            name: "Nikhil",
            branch: "IT",
            year: "2nd Year",
            image: "https://via.placeholder.com/150/3357FF/white?text=Nikhil"
        },
        {
            id: 4,
            name: "Vikranth",
            branch: "IT",
            year: "2nd Year",
            image: "https://via.placeholder.com/150/F033FF/white?text=Vikranth"
        }
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Student Profiles</h1>
            <div style={styles.cardContainer}>
                {Student.map((stu) => (
                    <Card1
                        key={stu.id}
                        name={stu.name}
                        branch={stu.branch}
                        year={stu.year}        // ✅ Fixed: was stu.branch
                        image={stu.image}
                    />
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: 'Arial',
    },
    title: {
        textAlign: 'center',
        color: '#333'
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
    }
};

export default Propexample;