//
let is_fetching = false;

//
export function testRefreshToken(is_expired = true) {
    return new Promise((res) => {
        if (!is_expired) {
            res('Token is not expired')
        }
        
        if (!is_fetching) {
            is_fetching = true;

            setTimeout(() => {
                is_fetching = false;

                res('Fetching token at first');
            }, 1000);
        } else {
            const interval = setInterval(() => {
                if (!is_fetching) {
                    clearInterval(interval);
                    
                    res('After waiting for fetching token at first');
                }
            }, 100);
        }
    });
}
