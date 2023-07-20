import React from 'react'
import './Quote.css'
import './font.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function Quote() {
 const history = useHistory();

 const backtoHome = ()=>{
    history.push('/');
 }



    return (
        <div className='my-5 '>
            <div className='text-center py-4 px-2 px-md-0'> <img src="https://bhagavadgita.io/static/images/gita/bhagavadgita-6.jpg" alt="arjuna and krishna" className='qWidth rounded shadow-lg ' /></div>


            <div className="text-center text-danger display-6 my-3 font px-2 px-md-0">
                <div><i className="fas fa-om mx-2 display-3 fw-bold"></i></div>
                Bhagavad Gita Quotes By Lord Krishna
            </div>
            <div className='fs-4 px-3 px-md-5 font'>

                <div>1. Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.</div>
                <div className='mt-3'>2. As they approach me, so I receive them. All paths, Arjuna, lead to me.</div>
                <div className='mt-3'>3. I am the beginning, middle, and end of creation</div>
                <div className='mt-3'>4. Among animals I am the lion; among birds, the eagle Garuda. I am Prahlada, born among the demons, and of all that measures, I am time.</div>
                <div className='mt-3'>5. I am death, which overcomes all, and the source of all beings still to be born.</div>
                <div className='mt-3'>6. Just remember that I am, and that I support the entire cosmos with only a fragment of my being.</div>
                <div className='mt-3'>7. Behold, Arjuna, a million divine forms, with an infinite variety of color and shape. Behold the gods of the natural world, and many more wonders never revealed before. Behold the entire cosmos turning within my body, and the other things you desire to see.</div>
                <div className='mt-3'>8. I am time, the destroyer of all; I have come to consume the world.</div>
                <div className='mt-3'>9. That one is dear to me who runs not after the pleasant or away from the painful, grieves not, lusts not, but lets things come and go as they happen.</div>
                <div className='mt-3'>10. Just as a reservoir is of little use when the whole countryside is flooded, scriptures are of little use to the illumined man or woman, who sees the Lord everywhere.</div>
                <div className='mt-3'>11. They alone see truly who see the Lord the same in every creature, who see the deathless in the hearts of all that die. Seeing the same Lord everywhere, they do not harm themselves or others. Thus they attain the supreme goal.</div>
                <div className='mt-3' > 12. With a drop of my energy I enter the earth and support all creatures. Through the moon, the vessel of life-giving fluid, I nourish all plants. I enter breathing creatures and dwell within as the life-giving breath. I am the fire in the stomach which digests all food.</div>
                <div className='mt-3'>13. There are three gates to this self-destructive hell: lust, anger, and greed. Renounce these three.</div>
                <div className='mt-3'>14. Pleasure from the senses seems like nectar at first, but it is bitter as poison in the end.</div>
                <div className='mt-3'>15. That which seems like poison at first, but tastes like nectar in the end - this is the joy of sattva, born of a mind at peace with itself.</div>
                <div className='mt-3'>16. The Lord dwells in the hearts of all creatures and whirls them round upon the wheel of maya. Run to him for refuge with all your strength, and peace profound will be yours through his grace</div>
                <div className='mt-3'>17. Whatever you do, make it an offering to me - the food you eat, the sacrifices you make, the help you give, even your suffering.</div>
                <div className='mt-3'>18. I am heat; I give and withhold the rain. I am immortality and I am death; I am what is and what is not.</div>
                <div className='mt-3'>19. Those who worship other gods with faith and devotion also worship me, Arjuna, even if they do not observe the usual forms. I am the object of all worship, its enjoyer and Lord.</div>
                <div className='mt-3'>20. Those who remember me at the time of death will come to me. Do not doubt this. Whatever occupies the mind at the time of death determines the destination of the dying; always they will tend toward that state of being.</div>
                <div className='mt-3'>21. When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.</div>
                <div className='mt-3'>22. They are forever free who renounce all selfish desires and break away from the egocage of 'I', 'me', and 'mine' to be united with the Lord. This is the supreme state. Attain to this, and pass from death to immortality.</div>
                <div className='mt-3'>23. They live in wisdom who see themselves in all and all in them, who have renounced every selfish desire and sense-craving tormenting the heart.</div>
                <div className='mt-3'>24. The meaning of Karma is in the intention. The intention behind action is what matters. Those who are motivated only by desire for the fruits of action are miserable, for they are constantly anxious about the results of what they do.</div>
                <div className='mt-3'>25. You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.</div>

            </div>

            <button type="button" className="btn btn-dark mx-3 mt-2 btn-sm " data-bs-toggle="tooltip"  data-bs-placement="top" data-bs-title="Back" onClick={backtoHome} > Back to Home</button> 

        </div>
    )
}
