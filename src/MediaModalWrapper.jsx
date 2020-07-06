/**
 * This component is deprecated! Do not use!
 */

import React from 'react';
import MediaModal from './MediaModal.jsx';

const parseChildren = (children) => {
    const parsedChildren = [];
    const elements = React.Children.toArray(children);

    var key = 0;

    elements.forEach(element => {
        const { id, className, src, type, alt } = element.props;

        if (id && className && className.indexOf('media-modal-target') !== -1) {
            const clonedElement = React.cloneElement(element, { src: null, type: null });

            parsedChildren.push(
                <MediaModal key={key} target={clonedElement} src={src} type={type} alt={alt} />
            );

            key++;
        }
        else {
            parsedChildren.push(element);
        }
    });

    return parsedChildren;
}

const MediaModalWrapper = (props) => (
    <>
        {parseChildren(props.children)}
    </>
);

export default MediaModalWrapper;