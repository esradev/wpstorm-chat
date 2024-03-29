/**
 * Import remote dependencies.
 */
import Axios from 'axios'

/**
 *
 * Create an Api object with Axios and
 * configure it for the WordPress Rest Api.
 *
 * The 'farazsmsJsObject' object is injected into the page
 * using the WordPress wp_localize_script function.
 *
 * @see https://since1979.dev/snippet-014-setup-axios-for-the-wordpress-rest-api/
 * @since 2.0.0
 */
const AxiosWp = Axios.create({
  baseURL: wpstormChatJsObject.rootapiurl + 'wpstorm_chat/v1',
  headers: {
    'content-type': 'application/json',
    'X-WP-Nonce': wpstormChatJsObject.nonce,
  },
})

export default AxiosWp
