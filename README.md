# custom-badge
Custom badge to replace the deprecated Badge in 2024.8

## Background

Release notes Home Assistant 2024.8: Introduction of new Badges And breaking changes omn the now depracated badges tba

Developer docs https://developers.home-assistant.io/docs/frontend/custom-ui/custom-badge/

Community post on Dashboard development: [Lets redesign](https://community.home-assistant.io/t/dashboard-chapter-2-let-s-redesign-the-cards-together/753839/39?u=mariusthvdb)

The new Badge design PR: https://github.com/home-assistant/frontend/pull/21401

Deprecated Badge design: https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/elements/hui-state-badge-element.ts

###
For now, we can still use the deprecated state-badge using

```yaml
type: custom:hui-state-badge-element
entity: sensor.voorkamer_temperatuur
```
____

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
