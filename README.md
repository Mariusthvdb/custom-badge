# custom-badge
Custom badge to replace the deprecated Badge in 2024.8

Still in a very very pre-alpha phase. Commented the import for the editor, which does not exist yet

<img width="546" alt="initial badge" src="https://github.com/user-attachments/assets/7d30aa13-e8bf-481d-958e-8110b5be1f50">


```yaml
- title: Test
  path: test_1
  icon: mdi:test-tube
  badges:

      - type: custom:custom-badge
        entity: light.alarm
```

The repeating chips below the new `custom-badge` are experimental `custom:button-card` in a quick and dirty effort to mimick legacy Badge functionality

```yaml
  cards:

    - type: grid
      columns: 8
      square: false
      cards:
        - <<: &test
            type: custom:button-card
            entity: sensor.voorkamer_temperatuur
            ?template: round_button
            show_state: true
            show_icon: false
            show_name: false
            show_label: true
            label: Voor
            styles:
              card:
                - font-size: 14px
        - <<: *test
        - <<: *test
        - <<: *test
        - <<: *test
        - <<: *test
        - <<: *test
        - <<: *test
```
