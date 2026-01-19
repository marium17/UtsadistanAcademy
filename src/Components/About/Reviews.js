import React from "react";
import { FaStar } from "react-icons/fa";
import "./Reviews.css";

function Reviews() {
  const reviews = [
    { name: "Mohidrehman1033@gmail.com", rating: 5, comment: "USATADISTAN's teachers are very supportive and helpful. They explain topics clearly and their lessons help me understand  my concept better. I feel more confident in class and enjoy studying." },
    { name: "Hamza Irfan", rating: 4, comment: "I (Hamza Irfan)Studied A-Levels under USATADISTAN teacher's guidance. Their expertise and teaching in these subjects are truly appreciated, as he clarifies complex concepts with  clarity and innovative techniques. Moreover, his personalized attention  with a nurturing approach, foster a supportive learning environment that motivates students to get  good grades in exams ,I got (A) in Accounting and (B) in business" },
    { name: "Ghazanfar Ali", rating: 4, comment: "USATADISTAN'S teachers are more like a friend than a teacher. They have their amazing way of making studying enjoyable. They explains concepts so clearly that everything just clicks and stays in your mind. We can always ask them questions freely, and they patiently makes sure we understand everything. They perfectly balances teaching with fun, making every lesson engaging and easy to follow." },
    { name: "Abdullah", rating: 4, comment: "This is Abdullah, I joined Ustadistan sir furqan in July 2025 as I have to appear for O/N Series examination for Business studies and Economics. At the begining of my journey there was an essence of nervousness in my mind that would I be able to appear or not? On the top of that, the content of the syllabus was also enough to widen my eyes and also to force me to quit. However, Sir Furqans teaching never refused me to fade my motivation. He lasted and supported me at every point where I was struggling; because of his enormous support I was able to stood till last, and was able to appear in my O/N Series without any stress or tension. Alhumdolillah, now I am continuing accounting with him, the result is expected to be in January, and will also inshallah ace up in the M/J examination series as I know that where I would struggling, Sir Furqan would be my back bone." },
    { name: "xtremeali28@gmail.com", rating: 4, comment: "USATADISTAN'S Teachers are one of the finest commerce teachers i have ever met, their teaching is detailed and gives practical examples to support his teachings and communicating with students effectively to help solve their queries.Not to mention being a good mentor teaching valuable lessons on how to live in this world." },
    { name: "Shazil Deol", rating: 5, comment: "I would highly recommend Sir furqan and their recommended teachers to any O and A-Level student. Their exceptional teaching was an instrumental in helping me succesfully complete my A levels in just a year. What truly sets him apart is his unwavering support and dedication. His constant encouragement and habit of clearing up my doubts on whatsapp made all the difference. Sir furqan and USATADISTAN's teachers aren't just teachers they are mentor who wants you to succeed. For anyone looking for great results and real support during A levels during their A levels. I wouldn't hesitate to recommend them." },
    { name: "Faiq", rating: 4, comment: "USATADISTAN'S teachers are more like a friend than a teacher. They have their amazing way of making studying enjoyable. They explains concepts so clearly that everything just clicks and stays in your mind. We can always ask them questions freely, and they patiently makes sure we understand everything. They perfectly balances teaching with fun, making every lesson engaging and easy to follow." },
    { name: "Arham Ali Khan", rating: 4, comment: "I was taught by USATADISTAN's teachers  for the subjects of Accounting and Mathematics A levels and I can personally vouch them to be great teachers, always available for help & enquiries and overall amazing people to taught a subject by." }, 
    { name: "Mekyle and wael", rating: 4, comment: "Across my experience with USATADISTAN and their teachings, my children have faced significant improvement for their educational journeys; An important learning experience with an understanding teacher. " },
  ];

  return (
    <section className="bg-primary text-white py-5">
      <h2 className="fw-bold text-center mb-5">What Our Students Say</h2>

      <div className="reviews-grid container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-warning" />
              ))}
            </div>

            <p className="review-text">“{review.comment}”</p>
            <h6 className="review-name">- {review.name}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;

