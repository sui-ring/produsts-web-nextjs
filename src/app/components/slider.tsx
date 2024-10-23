import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
    height: '320px',
    color: '#fff',
    lineHeight: '320px',
    textAlign: 'center',
    width: '100%',
    background: '#364d79',
};

const slides = [
    {
        key: 1,
        content: '1',
    },
    {
        key: 2,
        content: '2',
    },
    {
        key: 3,
        content: '3',
    },
    {
        key: 4,
        content: '4',
    },
];

const Slider = () => {
    return (
        <Carousel arrows infinite={false} autoplay dotPosition="bottom">
            {slides.map(slide => (
                <div key={slide.key}>
                    <h3 style={contentStyle}>{slide.content}</h3>
                </div>
            ))}
        </Carousel>
    );
}

export default Slider;