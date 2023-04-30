import React from 'react';
import Table from 'react-bootstrap/Table';

const ImportantDates = () => {
    const importantDates = [
        {
            date: 'June 5, 2023',
            event: 'Announcement of Conference'
        },
        {
            date: 'April 26, 2024',
            event: 'Full paper Submission Deadline'
        },
        {
            date: 'May 31, 2024',
            event: 'Acceptance Notification Deadline'
        },
        {
            date: 'June 10, 2024',
            event: 'Camera Ready Manuscript Deadline'
        },
        {
            date: 'June 20, 2023',
            event: 'Conference Registration Deadline'
        },
        {
            date: 'August 9-11, 2024',
            event: 'Conference Dates'
        }
    ];

    return (
        <div style={{
            backgroundColor: "#465e90"
        }}>
            <div
                style={{
                    margin: "10px 200px",
                    backgroundColor: "white"
                }}
            >
                <div className="fs-1 fw-bold"
                    style={{
                        color: "Black",
                        textAlign: "left",
                        margin: "5px",
                        paddingLeft: "10px"
                    }}
                >
                    Important Dates
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {importantDates.map(({ date, event }) => (
                            <tr key={date}>
                                <td style={{ width: "50%" }}>{event}</td>
                                <td>{date}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ImportantDates;
