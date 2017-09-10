import React from 'react'
import img from './img.JPG'

export default class SE extends React.Component {

	render(){

		const whiteBg = {
			backgroundColor: 'white',
			marginBottom: '0px'
		}

		return (
			<div className="jumbotron jumbotron-fluid" style={whiteBg} id="lab-se">
				<div className="container">
					<div className="row">
						<div className="col">
							<img src={img} className="img-fluid" />
						</div>
						<div className="col col-md-9">
							<div className="row">
								<div className="col">
									<h1>Software Engineering (SE)</h1>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<p>
										ผมชื่อ ณัฐพล เลิศวิทยาไตร (วิน) CPE ได้ฝึกงานที่ NAIST ระยะเวลา 2 เดือน 10 วัน ได้อยู่ที่แล็ป Software Engineering (SE) โดยมี Prof. Kenichi Matsumoto เป็นหัวหน้าแล็ป และมี Prof. อีก 4 ท่าน โดยแล็ปนี้เรียกได้ว่าเป็นแล็ปที่ทำงานจริงจัง แอบกดดันนิดๆ อาจารย์และคนในแล็ปมีความเป็นกันเอง สามารถปรึกษาเรื่องงานได้ตลอด สำหรับงานที่แล็ปนี้ทำจะเป็นในด้านของการวิจัยเกี่ยวกับซอร์ฟแวร์เป็นหลัก
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<p>
										สำหรับคนที่สนใจที่จะฝึกงานที่ญี่ปุ่น NAIST ก็เป็นทางเลือกที่ดีอย่างหนึ่ง ซึ่งจะได้รับประสบการณ์กลับมาหลายๆอย่าง และ ยังได้สัมผัสความเป็นอยู่ ถ้าเกิดใครที่มีแผนที่จะเรียนต่อเมืองนอก เพราะจะทำให้ช่วยตัดสินใจเรื่องอนาคตได้ดียิ่งขึ้น
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
