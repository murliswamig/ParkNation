
const commonRegex = /^[a-z A-Z 0-9.,;\s ?]*$/

const commonFormat = {
  pattern: commonRegex,
  message: 'Please enter valid data'
}

const commonFormatWithSpecialChar = {
  pattern: /^[a-z A-Z 0-9.,?'":!;/-\s ?]*$/,
  message: 'Please enter valid data'
}

const validation = {
  mobile: {
    presence: {
      message: 'Please enter your phone number'
    },
    format: {
      // pattern: /^[0-9]*$/,
      pattern: /^(\+\d{1,3}[- ]?)?\d*$/,
      message: 'Please enter a valid mobile phone number'
    },
    length: {
      minimum: 7,
      message: 'Phone number must be between 7-15 digits'
    }
  },
  contactNo: {
    presence: {
      message: 'Please enter your contact number'
    },
    format: {
      // pattern: /^[0-9]*$/,
      pattern: /^(\+\d{1,3}[- ]?)?\d*$/,
      message: 'Please enter a valid contact number'
    },
    length: {
      minimum: 7,
      message: 'contact number must be between 7-15 digits'
    }
  },
  name: {
    presence: {
      message: 'Please enter user name'
    },
    format: commonFormatWithSpecialChar,
  },
  comment: {
    presence: {
      message: 'Please enter comments'
    },
    format: commonFormatWithSpecialChar,
  },
  cname: {
    presence: {
      message: 'Please enter name'
    },
    format: commonFormatWithSpecialChar,
  },
  description: {
    presence: {
      message: 'Please enter description'
    },
    format: commonFormatWithSpecialChar,
    length: {
      minimum: 3,
      message: 'At least 3 characters required'
    }
  },
  otp: {
    presence: {
      message: 'Please enter One Time Password'
    },
    format: {
      pattern: /^[0-9]{4,4}$/,
      message: 'Please enter a valid One Time Password'
    },
    length: {
      minimum: 4,
      message: 'Please enter a valid One Time Password'
    }
  },
  tick: {
    presence: {
      message: 'Please accept terms and conditions'
    }
  },
  login_password: {
    presence: {
      message: 'Please enter a password'
    }
  },
  email: {
    presence: {
      message: 'Please enter your email',
    },
    format: {
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
      message: 'Please enter a valid email'
    }
  },
  first_name: {
    presence: {
      message: 'Please enter your first name'
    },
    format: {
      pattern: /^(?!\s*$|\s).[a-z A-Z 0-9]{0,56}$/,
      message: 'Please enter a valid first name'
    }
  },
  subject: {
    presence: {
      message: 'Please enter subject'
    },
    format: {
      pattern: /^(?!\s*$|\s).[a-z A-Z 0-9]{0,56}$/,
      message: 'Please enter a valid subject'
    }
  },
  last_name: {
    presence: {
      message: 'Please enter your last name'
    },
    format: {
      pattern: /^(?!\s*$|\s).[a-z A-Z 0-9]{0,56}$/,
      message: 'Please enter a valid last name'
    }
  },
  password: {
    presence: {
      message: 'Please enter a password'
    },
    format: {
      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$/,
      message: 'Your password must have 8-20 characters including uppercase, lowercase, number, special symbol combination'
    },
    length: {
      minimum: 8,
      maximum: 20,
      message: 'Your password should be between 8 to 20 char long'
    }
  },
  confirm_password: {
    presence: {
      message: 'Please enter a confirm password'
    },
    length: {
      minimum: 1,
      message: ""
    },
    match: {
      message: 'Your password & confirm password must be same'
    }
  },
  old_password: {
    presence: {
      message: 'Please enter old password'
    }
  },
  blank: {
    presence: {
      message: 'This field is required'
    }
  },

  keyword: {
    presence: {
      message: "Please enter text to search"
    },
    format: commonFormat,
    length: {
      minimum: 3,
      message: "At least 3 characters required"
    }
  },

  blankPass: {
    presence: {
      message: "Please provide password"
    }
  },
  location: {
    presence: {
      message: "Please enter your location"
    }
  },

  new_password: {
    presence: {
      message: "Please enter new password"
    },
    format: {
      pattern: /^\S*$/,
      message: "Spaces are not allowed"
    },
    length: {
      minimum: 8,
      maximum: 12,
      message: "Your password must be between 8 and 12 characters"
    }
  },
  image: {
    presence: {
      message: "Please Select a profile pic"
    }
  },
  newPassword: {
    presence: {
      message: 'Please enter password'
    },
    format: commonFormatWithSpecialChar,
  },
};

export default validation;
