import { Container, Row, Col } from "react-bootstrap";
import { aboutMeItems, workExperienceItems } from "../data/aboutMeData";
import colorSharp from "../assets/img/color-sharp.png";
import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

/** 
 * Renders either an image or a Youtube video based on MEDIA TYPE
 * accept isTop to be able to play and swipe through video
*/
function CardMedia ({ item, isTop }) {

    const [interactive, setInteractive] = useState(false);

    // When the card is no longer on top, reset (prevents stuck states)
    useEffect(() => {
        if(!isTop){
            setInteractive(false);
        }
    }, [isTop]);

    if (item.type === "youtube") {
        return (
            <div className={`aboutMe-video ${interactive ? "isInteractive" : ""}`}>
                {/** TOP-RIGHT toggle to switch between video interaction and swipe */}
                <button
                    type="button"
                    className="aboutMe-videoToggle"
                    onClick={(e) => {
                        e.stopPropagation();
                        setInteractive((prev) => !prev);
                    }}
                >
                    {interactive ? "SWIPE" : "PLAY"}
                </button>

                {/** if not  interactive, show a full overlay to guide users*/}
                {!interactive && (
                    <button
                        className="aboutMe-videoOverlay"
                        onClick={(e) => {
                            e.stopPropagation(); // don't trigger drag
                            setInteractive(true);
                        }}
                        type="button"
                    >
                        CLICK PLAY TO INTERACT
                    </button>
                )}
                <iframe
                    src={item.src}
                    title={item.title || "Youtube Video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscrope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    // this would just be the default image card (pictures)
    return (
        <img
            src={item.src}
            alt={item.alt || ""}
            draggable="false"
        />
    );
}

// --------- CARD STACK ANIMATION W/ MEDIA FUNCTION ADDED AND item parameter -----------------
function SwipeCardStack({ items = [] }) {
    const [cards, setCards] = useState(items);

    // useEffect(() => {
    //     setCards(items);
    // }, [items]);

    // when the top card changes, the new top card willl reuse this x value
    const x = useMotionValue(0);
    
    // As x moves left/right, slightly rotate it giving it a CARD FLICK animation
    // (maybe change [-200, 200] to -200, 500)
    const rotate = useTransform(x, [-200, 200], [-12, 12]);
    
    // this GIVES THE IMAGES A FADING EFFECT
    const opacity = useTransform(x, [-220 , 0, 320], [0.6, 1, 0.6]);

    // throws the card offscreen, then move to the back of the deck
    const throwCard = async (direction) => {
        // directions: left = -1 : right = +1
        const targetX = direction * 500;

        // Animate current top card offscreen with the animation easeOut for value "x" and speed
        await animate(x, targetX, { duration: 0.25, ease: "easeOut" });

        // Rotate the array, takes first card and push to end
        setCards((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });

        // IMPORTANT..reset x so that the next top card is CENTERED
        // THIS IS  NEED, or w/o it the top card could have a different x position that is inherited
        x.set(0);
    };

    // this is called when the user releases the drag
    const onDragEnd = (_, info) => {
        // how far the user drags the img
        const swipeDistance = info.offset.x;
        // how fast the user flicked the img
        const swipeVelocity = info.velocity.x;

        // trigger swipe by either dragging it far enough or being flicked fast enough
        const shouldSwipe = Math.abs(swipeDistance) > 120 || Math.abs(swipeVelocity) > 800;

        // this checks if the user did not swipe enough which causes to go back in its orignal place
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
        <div className="aboutMe-cardStack">
            <AnimatePresence initial={false}>
                {/** MAP THROUGH THE OBJECTS (3). Use unique ID or SRC as the key */}
                {cards.slice(0, 3).reverse().map((item, index) =>{
                    // UPDATED THIS INDEX PART
                    const actualIndex = cards.indexOf(item);
                    const isTop = actualIndex === 0;
                    const zIndex = 100 - actualIndex;
                    const scale = 1 - actualIndex * 0.01;
                    const y = actualIndex * 18;
                    const xOffset = actualIndex * 50;

                    return (
                        // UPDATED KEY being unique to each img/video we ahd
                        <motion.div
                            key={item.src} // assuming src is unique
                            className={`aboutMe-card ${isTop ? "isTop" : ""}`}
                            style = {
                                isTop
                                ? { x, rotate, opacity, zIndex }
                                : { x: xOffset, y, scale, zIndex }
                            }
                            drag={isTop ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.18} // how FAR YOU CAN SWIPE CARD/img
                            dragSnapToOrigin={false}
                            // when new card is top, it reuses the same motion value "x" and resets
                            onDragStart={isTop ? () => x.set(0) : undefined} // hard reset x everytime the top card is grabbed
                            onDragEnd={isTop ? onDragEnd : undefined}
                            initial = {{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: isTop? 1 : scale }}
                            exit={{ opacity: 0, exit: x > 0 ? 500 : -500 }}
                            // animation for how big the image gets when you TAP ON, higher the bigger
                            whileTap={isTop ? { scale: 1.02 } : undefined}
                        >
                            {/** call the new cardmedia function */}
                            <CardMedia item={item} isTop={isTop}/>
                        </motion.div>
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

                    {/** RIGHT SIDE, UPDATED TO USE .media */}
                    <Col md={6} className="aboutMe-Pictures">
                            <SwipeCardStack items={aboutMeItems.media} />
                    </Col>
                </Row>

                {/** ------------------ THIS IS WORK EXPERIENCE --------------------- */}
                <Row className="align-items-center">

                    {/** LEFT SIDE */}
                    <Col md={6}>
                            <Row>
                                
                                <h1 className="aboutMe-LeadershipTitle">
                                    Work Experience
                                </h1>
                            </Row>
                            <Row>
                                <motion.div
                                    className="aboutMe-summary"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.35 }}
                                >
                                    <div className="aboutMe-summaryTitle">
                                        <h2> 
                                            {workExperienceItems.title}
                                        </h2>
                                        <h4>
                                            {workExperienceItems.meta}
                                        </h4>   
                                    </div>
                                    <motion.ul
                                        className="aboutMe-bullets"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.35 }}
                                    >
                                        {workExperienceItems.description.map((paragraph, index) =>(
                                            <motion.li key={index} variants={paragraphVariants}>{paragraph}</motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </Row>
                    </Col>

                    {/** RIGHT SIDE, UPDATED TO USE .media */}
                    <Col md={6} className="aboutMe-Pictures">
                            <SwipeCardStack items={workExperienceItems.media} />
                    </Col>
                </Row>
            </Container>


            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
}