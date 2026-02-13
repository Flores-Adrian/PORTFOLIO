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

    // this would be the motion value for the TOP CARD
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-12, 12]);
    const opacity = useTransform(x, [-220, 0, 220], [0.6, 1, 0.6]);

    // throws the card offscreen, then rotate the array
    const throwCard = async (direction) => {
        //directions: left = -1  :  right = +1
        const targetX = direction * 500;

        // Animate current top card offscreen
        await animate(x, targetX, { duration: 0.25, ease: "easeOut" });

        // move first card to the end
        setCards((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
        
        // reset the motion value for new card that is on top now
        x.set(0);
    };

    const onDragEnd = (_, info) => {
        const swipeDistance = info.offset.x;
        const swipeVelocity = info.velocity.x;

        // either you can drag far enough or flick it fast enough
        const shouldSwipe = Math.abs(swipeDistance) > 120 || Math.abs(swipeVelocity) > 800;

        if (!shouldSwipe) {
            // snap back
            animate(x, 0, { type: "spring", stiffness: 300, damping: 25 });
            return;
        }

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
                    const scale = 1 - index * 0.05;
                    const y = index * 12;

                    return (
                        <motion.img 
                            key={src}
                            src={src}
                            alt=""
                            className={`aboutMe-card ${isTop ? "isTop" : ""}`}
                            // Top card use motion value while others are static stacked transforms
                            style={
                                isTop
                                ? { x, rotate, opacity, zIndex }
                                : { transform: `translateY(${y}px) scale(${scale})`, zIndex }
                            }
                            drag={isTop ? "x" : false }
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.18}
                            dragSnapToOrigin={false}
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