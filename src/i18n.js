import i18next from 'i18next';
import controlBar_en from './translations/en/controlBar.json';
import drawerMenu_en from './translations/en/drawerMenu.json';
import ihs_en from './translations/en/ihs.json';
import beta_en from './translations/en/beta.json';
import cin_en from './translations/en/cin.json';
import countries_en from './translations/en/countries.json';
import regions_en from './translations/en/regions.json';
import auth_en from './translations/en/auth.json';
import home_en from './translations/en/home.json';
import riskSources_en from './translations/en/riskSources.json';
import parameters_en from './translations/en/parameters.json';
import formulasCrp_en from './translations/en/formulasCrp.json';
import maintenance_en from './translations/en/maintenance.json';
import validators_en from './translations/en/validators.json';
import users_en from './translations/en/users.json';
import general_en from './translations/en/general.json';
import audit_en from './translations/en/audit.json';
import sectorsAndLobs_en from './translations/en/sectorsAndLobs.json';
import severities_en from './translations/en/severities.json';
import formulasWacc_en from './translations/en/formulasWacc.json';
import charts_en from './translations/en/charts.json';
import calculationWizard_en from './translations/en/calculationWizard.json';
import export_en from './translations/en/export.json';
import country_detail_en from './translations/en/country_detail.json';
import quarters_en from './translations/en/quarters.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      controlBar: controlBar_en,
      drawerMenu: drawerMenu_en,
      ihs: ihs_en,
      beta: beta_en,
      cin: cin_en,
      countries: countries_en,
      regions: regions_en,
      auth: auth_en,
      home: home_en,
      maintenance: maintenance_en,
      parameters: parameters_en,
      riskSources: riskSources_en,
      formulasCrp: formulasCrp_en,
      validators: validators_en,
      users: users_en,
      general: general_en,
      audit: audit_en,
      sectorsAndLobs: sectorsAndLobs_en,
      severities: severities_en,
      formulasWacc: formulasWacc_en,
      charts: charts_en,
      calculationWizard: calculationWizard_en,
      export: export_en,
      countryDetail: country_detail_en,
      quarters: quarters_en
    }
  }
});

export default i18next;
