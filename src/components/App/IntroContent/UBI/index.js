import React from 'react'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.png'
import img4 from './4.jpg'

export default class UBI extends React.Component {

		render(){

			const whiteBg = {
				backgroundColor: 'white',
				marginBottom: '0px'
			}

			return (
				<div className="jumbotron jumbotron-fluid" style={whiteBg} id="lab-ubi">
					<div className="container">
						<div className="row">
							<div className="col-md-9">
								<div className="row">
									<div className="col">
										<h1>Ubiquitous Computing (UBI)</h1>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											ฮัลโหลลลลล เทสๆ คอนนิจิวะ 555 ถ้าน้องคนไหนหลงเข้ามาอ่านคือจะพบว่า พี่เป็นคนหาสาระได้ยาก 555 ไหนๆก็เข้ามาอ่านแล้ว พี่แชร์ประสบการณ์การฝึกงาน (เริ่มเหมือนกระทู้พันทิปไปทุกทีอ่ะ 555) ที่ Nara Institute of Science and Technology หรือ เรียกย่อๆ ว่า NAIST ก็ได้นะ มหาลัยนี้ก็ตั้งอยู่ที่จังหวัดนาระ แถบคันไซของประเทศญี่ปุ่นนั่นเอง เย่!! (เย่อะไร 5555) เปิดรับนักศึกษาตั้งแต่ปริญญาโทถึงเอกนะ ส่วนแลปที่พี่สิงสถิตอยู่คืออยู่ในส่วนของ Graduate School of Information Science จ้า แลปของพี่ชื่อว่า Ubiquitous Computing Laboratory หรือเรียกย่อๆว่า Ubi Lab ก็ได้
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<img src={img1} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="row">
									<div className="col">
										<h3>Ubiquitous Computing คืออะไร?</h3>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											น้องอาจจะงงๆว่า เอ มันคืออะไรเหรอพี่ คือถ้าเอาง่ายๆ ให้น้องเกทอย่างรวดเร็วนะ ถ้าน้องรู้จัก IoTs ถือว่าน้องมาถูกทางแล้วแหละ แลปพี่จะอธิบายง่ายๆเลยก็คือ เป็นการนำความรู้ทางด้านเทคโนโลยี ไม่ว่าจะเป็น อุปกรณ์อิเลกทรอนิกส์ต่างๆ เช่น สมาร์ทโฟน คอมพิวเตอร์ แทปเลต หรือแม้แต่บอร์ดอิเล็กทรอนิกส์ที่เชื่อมต่อกับพวกเซนเซอร์ตรวจจับต่างๆเนี้ย มาผสมผสานกับความรู้ทางด้านการวิเคราะห์ข้อมูล หรือ Data Science เพื่อให้ได้องค์ความรู้ใหม่นั่นเอง อย่างที่น้องเห็นทั่วไปนะ สมาร์ทโฮม สมาร์ททีวี อัลฟาโกะ อะไรต่างๆเนี้ย ก็ถือเป็นผลผลิตจากการผสมผสานความรู้เหล่านั้นทั้งนั้นเลยแหละ พอเห็นภาพยัง (โห ประหลาดใจ เราก็มีสาระกับเค้าได้ 55555) อย่างแลปของพี่ Research Topic จะครอบคลุม 3 หัวข้อหลักๆเลยก็คือ Smart Home, Smart life และก็ Smart City
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<img src={img3} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-9">
								<div className="row">
									<div className="col">
										<h3>
											บรรยากาศภายในแลปเป็นยังไงบ้าง?
										</h3>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											บอกเลยว่าแลปพี่ตลกทุกคน 5555555 ถึงพี่ไปเป็นคนไทยคนเดียว ก็แบบไม่เหงาเลย พี่ค่อนข้างที่จะสนิทกับคนในแลปพอสมควรเลยแหละ อย่างที่แลปพี่มีคนประมาณ 30 คน เยอะป่ะ 55555 อบอุ่นอ่ะ บางทีเลิกตอนเย็นๆ คนเสียงจะดังวุ่นวายบ้าง แต่ก็ทำให้ไม่เหงาอ่ะนะ อีกอย่างคือที่พี่เจอแล้วประทับใจ คือ ทุกตนมีความยูนีคในตัวเองแล้วก็สามารถเอาความยูนีคนั้นอ่ะ มาทำเป็นหัวข้อ Research ได้ อย่างเช่น มีคนนึงชอบเล่นกล้าม เค้าก็ทำอุปกรณ์ที่สามารถตรวจจับการออกำลังกายของเค้าได้อ่ะ (Activity Recognition) ด้วยความที่หัวข้อของแลปมันสามารถทำได้หลากหลายพี่ก็ถือว่าเป็นข้อดีของแลปนี้เลยอ่ะนะ ถ้าถามว่าแลปนี้หนักมั้ย ยากมั้ย พี่ก็ว่าขึ้นอยู่กับตัวน้องเลยนะ คือถ้าเราชอบต่อให้ยากแค่ไหน เหนื่อยแค่ไหนก็ทำได้ ข้อดีของการมาฝึกงานที่ญี่ปุ่นคือ เราได้เห็นความทุ่มเทของคนที่นี่แล้วทำให้เราอยากจะทำงานอย่างทุ่มเทบ้างอ่ะ พี่ว่ามันสุดยอดเลยนะว่ามั้ย ^^
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<img src={img2} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="row">
									<div className="col">
										<h3>Facility ของแลปเป็นยังไงบ้าง?</h3>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											เอาจริงๆเลยนะ พี่โครตชอบ facility ของแลปนี้มากๆเลย อย่างโต๊ะของป.โทปี 1 (M1) เนี้ย เค้าจัดให้หันหน้าชนกันเป็นสี่เหลี่ยมผืนผ้า ซึ่งเอาจริงๆแล้วพี่ว่ามันเป็น strategy ที่ดีมากๆ เพราะอย่างเราเข้ามาปีแรกเราก็ยังไม่สนิทกับคนในแลปเท่าไหร่ ถ้ายิ่งนั่งแบ่งเป็นช่องๆเหมือนออฟฟิสพี่ว่าก็อาจจะใช้เวลาในการสนิทสนมนิดนึงเนอะ อันนี้พี่ว่าดีมากๆเลย อีกส่วนที่พี่ชอบคือ ที่แลปจะมีคนนึงที่ไปซื้อขนม น้ำ บะหมี่ถ้วยต่างๆ จากร้านขายส่งแล้วก็เอามาใส่ตู้เย็นในแลปขายราคาไม่เกิน 100 เยน อารมณ์เหมือนเซเว่นอ่ะน้อง ทำแลปไปยาวๆ ไม่ต้องออกไปมินิมาร์ทในมอ ซึ่งกว่าจะเดินไปกี่ใช้เวลาหลายนาทีอยู่ แล้วยิ่งช่วงที่พี่มาฝึกเป็นช่วงหน้าร้อนของที่นี่ ซึ่งถ้าใครที่เคยมาช่วงนี้จะพบว่ามันร้อนไม่ต่างจากพี่ไทยของเราเลย = =;; ความหวังพังทลายมาก 55 จะดีหน่อยช่วงที่ฝนตกหรือไต้ฝุ่นเข้ามันก็ไม่ค่อยร้อน แต่แลกกับความเปียกชื้นแทน = =’’
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											อ้อ! มีอย่างนึงในแลปที่ไม่เสียตังแล้วก็กินฟรีได้คือ กาแฟ จ้าที่แลปจะมีเครื่องชงกาแฟอยู่ในห้องที่เป็นเหมือนกับลักษณะห้องเรียนซึ่งเป็นของแลป ซึ่งห้องนี้ก็จะมีไว้ประชุม หรือสัมมนาทุกวันจันทร์ หรือพุธ ส่วนสัมมนาก็คือการที่นักเรียนคนทุกคนในแลปจะถูกอาจารย์จับกลุ่มให้เป็นกลุ่มละ 3 คน คละทั้งป.เอกและโท แล้วก็หาเปเปอร์หัวข้อที่เกี่ยวกับแลปแล้วก็น่าสนใจมาพรีเซ้นต์ ซึ่งพี่ก็ว่าเป็นข้อดีคือ หนึ่งคนอื่นก็ไม่ต้องมาเสียเวลาอ่านเปเปอร์เพราะมีคนมาย่อยให้ฟังเนอะ แล้วสอง คือทุกๆท้ายการพรีเซ้นต์ก็จะมีการ discussion กันทำให้เกิดไอเดียในการทำวิจัยใหม่ๆ ได้ พี่ว่าตรงนี้มีประโยชน์มากๆเลยแหละ
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											มุมนึงของแลปที่พี่ชอบคือมุม ที่เป็นโซฟา ตรงนี้จะเป็นที่พักผ่อน หรืองีบหลับของทุกคนในแลป ก็จะมีหลอนผ้าห่ม พร้อม พี่ชอบมากเวลาเหนื่อยๆ ขี้เกียจกลับห้องก็แอบงีบแปปๆ ก้ตื่นมาทำงานต่อได้ มีเกมให้เล่น มีการ์ตูนให้อ่าน พร้อมมาก ซึ่งพี่ว่าน่าจะเป็นของรุ่นพี่ก่อนๆที่เค้าสะสมกันไว้อ่ะนะ
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className="row">
										<div className="col">
											<h3>กิจกรรมของแลปมีอะไรบ้าง?</h3>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<p>
												นอกจากสัมมนาทุกอาทิตย์ที่พี่บอกไปแล้วก็ ทุกปีจะมีทริปของแลปที่โชคดีพี่มาตรงกับช่วงที่เค้าจะไปพอดี แต่ละปีก็จะไปต่างจังหวัดของญี่ปุ่นต่างๆกันไป อย่างของปีนี้ที่พี่ได้ไปคือ จังหวัดกิฟุ ใช้เวลาเดินทางประมาณ 5 ชั่วโมงจากจังหวัดนาระ เป้าหมายถึงทำให้นักเรียนมี motivation ในการวิจัยและให้ทุกคนในแลปสนิทกันมากขึ้น อย่างส่วนที่เพิ่ม motivation คือ ป.โทปี 1 หรือ M1 จะได้รับมอบหมายให้เข้าแข่งขันพรีเซ้นต์สมาร์ทโฟนแอพลิเคชั่น ซึ่งจะต้องเป็นเนื้อหาที่แปลกใหม่หรือ พัฒนาต่อยอกสิ่งใหม่ๆ แบบที่ไม่เคยมีใครทำมาก่อน พี่ตอนที่ดูพรีเซ้นต์ก็ถือว่าฮามาก ทุกคนพยายามพรีเซ้นต์ให้มันฮามันตลกอ่ะ 555 บรรยากาศก็เลยคึกคักมาก ส่วนรางวัลที่จำได้นะที่ 1 ได้เงินสามหมืนเยน หรือประมาณหนึ่งหมื่นบาท (เยอะมากอยากได้ 555) ที่อื่นๆ ก็จะเป็น Apple watch หรือ ได้ไป conference กับอาจารย์ที่ประเทศเยอรมัน เป็นต้น ถือว่าของรางวัลล่อตาล่อใจให้ทำดีกันมาก 55 แล้วก่อนจะมาพี่ก็เห็นทุกคนทำกันอย่างเต็มที่เลย อดหลับอดนอนกันสุดๆ
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<img src={img4} className="img-fluid" />
										</div>
									</div>
									<div className="row">
										<div className="col">
											<p>
												นอกจากแลปทริปแล้วก็จะมี งานเลี้ยงย่อยๆบ้าง เวลามีนักวิจัยจากต่างประเทศ หรือนักศึกษาฝึกงาน แล้วก็มีจัดสังสรรค์กันก่อนปิดเทอมหน้าร้อนเช่น ปาร์ตี้บาร์บิคิว กันริมบ่อน้ำในมอ สนุกมากๆเลยแหละ พี่รู้สึกว่าแลปนี้เป็นแลปที่พี่ชอบมากๆเลย หวังว่าที่พี่เขียนมาจะทำให้น้องสนใจอยากมาฝึกงานที่แลปนี้นะ อิอิ
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<p><small>-  พี่ยูน  -</small></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}

}