import React from 'react';
import { Row, Col } from 'reactstrap';

import '../../style/styles.css';

const PassengerInstruction = (props) => {
    return (
        <div>
            <Row>
                <Col>
                    <p className="instruction">
                        <b>Tipe penumpang</b>
                        <br/>Bayi yaitu dibawah tiga tahun, 
                        <br/> dewasa yaitu usia tiga tahun atau lebih.
                        <br/><b>Nama dan nomor identitas </b> 
                        harus sesuai dengan yang tertera pada Kartu Identitas 
                        yang dimiliki penumpang (KPT/SIM/Passport/dll), apabila
                        usia penumpang di bawah 17 tahun dapat diisi dengan tanggal
                        lahir penumpang bersangkutan dengan format (dd/mm/yy).
                    </p>
                </Col>
                <Col>
                    <p className="instruction">
                        <b>Passenger type</b>
                        <br />Passengers under three years old are categorized as an infant,
                        aged three years old or more are adult.
                        <br /><b>Ensure your Name and ID number </b>
                        match your identity card (KTP/SIM/Passport/etc).
                        <br/>For passengers under 17 years old, ID column may be filled
                        by their date of birth with format of (dd/mm/yy).
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default PassengerInstruction;