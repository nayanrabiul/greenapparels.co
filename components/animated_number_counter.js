
import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const AnimatedCounter = ({ countTo, duration, className }) => {
    return (
        <div className="">
            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                {({ isVisible }) => (
                    <div style={{ height: 100 }}>
                        {isVisible ? <CountUp className={`${className}`} duration={duration} end={countTo} /> : null}
                    </div>
                )}
            </VisibilitySensor>
        </div>
    );
};

export default AnimatedCounter;
