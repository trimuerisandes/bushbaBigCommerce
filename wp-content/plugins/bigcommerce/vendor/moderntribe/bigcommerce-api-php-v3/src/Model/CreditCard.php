<?php
/**
 * CreditCard
 *
 * @package  BigCommerce\Api\v3
 */

/**
 * BigCommerce API
 *
 * A Swagger Document for the BigCommmerce v3 API.
 *
 * OpenAPI spec version: 3.0.0b
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace BigCommerce\Api\v3\Model;

use \ArrayAccess;

class CreditCard implements ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      * @var string
      */
    protected static $swaggerModelName = 'CreditCard';

    /**
      * Array of property to type mappings. Used for (de)serialization
      * @var string[]
      */
    protected static $swaggerTypes = [
        'card_type' => 'string',
        'card_iin' => 'string',
        'card_last4' => 'string'
    ];

    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of attributes where the key is the local name, and the value is the original name
     * @var string[]
     */
    protected static $attributeMap = [
        'card_type' => 'card_type',
        'card_iin' => 'card_iin',
        'card_last4' => 'card_last4'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     * @var string[]
     */
    protected static $setters = [
        'card_type' => 'setCardType',
        'card_iin' => 'setCardIin',
        'card_last4' => 'setCardLast4'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     * @var string[]
     */
    protected static $getters = [
        'card_type' => 'getCardType',
        'card_iin' => 'getCardIin',
        'card_last4' => 'getCardLast4'
    ];

    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    public static function setters()
    {
        return self::$setters;
    }

    public static function getters()
    {
        return self::$getters;
    }

    

    

    /**
     * Associative array for storing property values
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     * @param mixed[] $data Associated array of property values initializing the model
     */
    public function __construct(array $data = [])
    {
        $this->container['card_type'] = array_key_exists('card_type', $data) ? $data['card_type'] : null;
        $this->container['card_iin'] = array_key_exists('card_iin', $data) ? $data['card_iin'] : null;
        $this->container['card_last4'] = array_key_exists('card_last4', $data) ? $data['card_last4'] : null;
    }

    /**
     * returns container
     * @return array
     */
    public function get()
    {
        return $this->container;
    }

    /**
     * show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalid_properties = [];
        return $invalid_properties;
    }

    /**
     * validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properteis are valid
     */
    public function valid()
    {
        return true;
    }


    /**
     * Gets card_type
     * @return string
     */
    public function getCardType()
    {
        return $this->container['card_type'];
    }

    /**
     * Sets card_type
     * @param string $card_type The credit-card type: Visa, MasterCard, etc.
     * @return $this
     */
    public function setCardType($card_type)
    {
        $this->container['card_type'] = $card_type;

        return $this;
    }

    /**
     * Gets card_iin
     * @return string
     */
    public function getCardIin()
    {
        return $this->container['card_iin'];
    }

    /**
     * Sets card_iin
     * @param string $card_iin The IIN of a credit-card number.
     * @return $this
     */
    public function setCardIin($card_iin)
    {
        $this->container['card_iin'] = $card_iin;

        return $this;
    }

    /**
     * Gets card_last4
     * @return string
     */
    public function getCardLast4()
    {
        return $this->container['card_last4'];
    }

    /**
     * Sets card_last4
     * @param string $card_last4 The last 4 digits of a credit-card number.
     * @return $this
     */
    public function setCardLast4($card_last4)
    {
        $this->container['card_last4'] = $card_last4;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     * @param  integer $offset Offset
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     * @param  integer $offset Offset
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     * @param  integer $offset Offset
     * @param  mixed   $value  Value to be set
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     * @param  integer $offset Offset
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(\BigCommerce\Api\v3\ObjectSerializer::sanitizeForSerialization($this), JSON_PRETTY_PRINT);
        }

        return json_encode(\BigCommerce\Api\v3\ObjectSerializer::sanitizeForSerialization($this));
    }
}


