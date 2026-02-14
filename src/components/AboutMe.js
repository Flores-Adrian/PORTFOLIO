import { Container, Row, Col } from "react-bootstrap";
import { aboutMeItems } from "../data/aboutMeData";
import colorSharp from "../assets/img/color-sharp.png";
import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

// ------------------- CARD STACK ANIMATION -----------------------
function SwipeCardStack({ images = [] }) {
    const [cards, setCards] = useState(images);

    // keep cards in sync
    useEffect(() => {
        setCards(images);
    }, [images]);

    // when the top card changes, the new top card will reuse this x value
    const x = useMotionValue(0);

    // As x moves left or right, slightly rotate it giving it a CARD FLICK feeling
    const rotate = useTransform(x, [-200, 200], [-12, 12]);
    
    // THIS GIVES THE IMAGES A FADING EFFECT
    const opacity = useTransform(x, [-220, 0, 220], [0.6, 1, 0.6]);

    // throws the card offscreen, then move to the back of the deck
    const throwCard = async (direction) => {
        //directions: left = -1  :  right = +1
        const targetX = direction * 500;

        // Animate current top card offscreen with the animation easeOut for value "x"
        await animate(x, targetX, { duration: 0.25, ease: "easeOut" });

        // Roate the array, takes first card and push to end
        setCards((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
        
        // IMPORTANT...reset x so that the next top card is CENTERED
        // THIS IS NEEDED, or w/o it the top card could have a different x position that is inherited
        x.set(0);
    };

    // this is called when the user releases the drag
    const onDragEnd = (_, info) => {
        // how far the user drags the img
        const swipeDistance = info.offset.x;
        // how fast the user flicked the img
        const swipeVelocity = info.velocity.x;

        // trigger swipe by eitheri dfragging it far enough or flicked fast enough
        const shouldSwipe = Math.abs(swipeDistance) > 120 || Math.abs(swipeVelocity) > 800;

        // this checks if the user did not swip enough, meaning the img goes back to center
        if (!shouldSwipe) {
            // snap back
            animate(x, 0, { type: "spring", stiffness: 300, damping: 25 });
            return;
        }
        
        // determines which direction to throw the card to (left or right)
        const direction = swipeDistance > 0 ? 1 : -1;
        throwCard(direction);
    };

    // return the animation for it
    return (
        <div className="aboutMe-cardStack" aria-label="Photo card stack">
            <AnimatePresence initial = {false}>
                {cards.slice(0,3).map((src, index) => {
                    const isTop = index === 0;
                    const zIndex = 100 - index;

                    // depth styling for the stack (cards behind the top)
                    // the higher it is the smaller the back cards get
                    const scale = 1 - index * 0.01;
                    // determine the how high/low you want the back images
                    const y = index * 18;
                    // change "PEEK" amount for background images
                    const xOffset = index * 50;

                    return (
                        <motion.img 
                            key={src}
                            src={src}
                            alt=""
                            className={`aboutMe-card ${isTop ? "isTop" : ""}`}
                            // Top card uses the motion value x and back cards used fixed values (x/y/scale)
                            // x/y/scale is USED B/C Framer Motion can consistently apply the offsets after each cycle
                            style={
                                isTop
                                ? { x, rotate, opacity, zIndex }
                                : { x: xOffset, y, scale, zIndex }
                            }
                            // allows only top card to be dragged
                            drag={isTop ? "x" : false }
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.18}
                            dragSnapToOrigin={false}
                            // when new card is top, it reuses the same motion value "x" and resets
                            onDragStart={isTop ? () => x.set(0) : undefined} // hard reset x everytime the top card is grabbed
                            onDragEnd={isTop ? onDragEnd : undefined}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileTap={isTop ? { scale: 1.02 } : undefined}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

export const AboutMe = () => {
    
    // parent container to make each paragraph animate one after another
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    // animation for each paragraph: fade in then slide up a bit
    const paragraphVariants = {
        hidden: {opacity: 0, y:14 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" },
        },
    };
    // ---------------- IMAGE CROSSFADE ----------------------
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if(!aboutMeItems.images || aboutMeItems.images.length <= 1) {
            return;
        }

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % aboutMeItems.images.length);
        }, 3500);

        return () => clearInterval(timer);

    }, []);

    return (
        <section className="aboutMe" id="aboutMe">
            <Container>
                <motion.h2
                 className="aboutMe-title"
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, ease: "easeOut" }}
                 viewport={{ once: true, amount: 0.4 }}
                 >
                    About Me
                </motion.h2>
                
                <Row className="align-items-center">
                    
                    {/** LEFT SIDE */}
                    <Col md={6}>
                        {/** .map() to loop through each paragraph in array and keep use unique index key/index */}
                        <motion.div
                         className="aboutMe-summary"
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="show"
                         viewport={{ once: true, amount: 0.35 }}
                         >
                            {aboutMeItems.description.map((paragraph, index) =>(
                                <motion.p key={index} variants={paragraphVariants}>{paragraph}</motion.p>
                            ))}
                        </motion.div>
                    </Col>

                    {/** RIGHT SIDE */}
                    <Col md={6} className="aboutMe-Pictures">
                            <SwipeCardStack images={aboutMeItems.images} />
                    </Col>
                </Row>
            </Container>


            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
}