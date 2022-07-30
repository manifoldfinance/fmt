{
  env: {
    jest: true
  },
  globals: {
    run_spec: false
  },
  extends: [
    "airbnb-base",
    "prettier"
  ],
  plugins: [
    "prettier"
  ],
  rules: {
    prettier/prettier: [
      "error",
      {
        singleQuote: true,
        trailingComma: "always"
      }
    ],
    max-len: [
      2,
      130,
      4
    ],
    no-param-reassign: [
      2,
      {
        props: false
      }
    ],
    no-plusplus: 0,
    no-underscore-dangle: 0,
    prefer-rest-params: 0,
    comma-dangle: [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ]
  }
}
