import React from 'react'

export default class MI extends React.Component {

	render(){

		const whiteBg = {
			backgroundColor: 'white',
			marginBottom: '0px'
		}

		return (
			<div className="jumbotron jumbotron-fluid" style={whiteBg} id="lab-mi">
				<div className="container">
					<div className="row">
						<div className="col">
							<h1>Mathematical Informatics (MI)</h1>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p>MI หรือ Mathematical Informatics เป็นแล็บที่เน้นงานวิจัยในด้านการใช้โมเดลทางคณิตศาสตร์มาคอยอธิบายสิ่งต่าง ๆ ทำงานในหลายด้าน เช่น mathematical biology, signal processing, statistical ฯลฯ โดยมีคอนเซปต์ของแล็บว่า "mathematical models are everywhere"</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p>การทำงานที่แล็บ ที่นี่ไม่ได้ฟิกซ์เรื่องเวลามากนัก เพราะไม่มีอาจารย์มาคอยตรวจตราเวลาเข้างานของเรา แต่จะมีการประชุมแล็บสัปดาห์ละสองครั้ง (ต้องเข้า) และมี journal club ที่จะเข้า paper คนอื่นมาเล่าให้ฟัง (เข้าก็ดี) งานที่ได้รับมอบหมายมาก็ให้คอยศึกษาไปเรื่อย ๆ แล้วจากการศึกษาของเรา เราเห็นอะไรหรือพบว่ามีปัญหาอะไรก็คอยเล่าให้อาจารย์ฟัง ควรจะเข้าไปพบอาจารย์บ่อย ๆ หน่อย อย่างน้อยก็ให้ได้สัปดาห์ละครั้ง อาจารย์จะคอยให้คำแนะนำว่า เราควรจะ research ไปทางไหน ควรจะไปอ่านในส่วนไหนต่อ</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
