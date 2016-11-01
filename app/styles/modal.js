var styles = {
    backdrop: {
        background: 'rgba(0, 0, 0, 0.8)',
        boxSizing: 'border-box',
        height: '100%',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: -1
    },
    popup: {
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 5,
        boxSizing: 'border-box',
        // minHeight: 200,
        padding: 20,
        position: 'relative',
        // minWidth: 300,
        color: 'black',
        marginTop: 190,
        width: '100%',
        overflowY: 'scroll'
    },
    popupContainer: {
        background: 'transparent',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        justifyContent: 'center',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 2
    }
}

module.exports = styles;