import React from "react";
import { Page, Card, FormLayout, TextField, Button } from "@shopify/polaris";

function AdminSettings() {
  return (
    <Page title="Settings">
      <Card sectioned>
        <FormLayout>
          <TextField label="Bar Position" placeholder="top or bottom" />
          <TextField label="Background Color" placeholder="#333" />
          <TextField label="Text Color" placeholder="#fff" />
          <TextField label="Button Background Color" placeholder="#555" />
          <Button primary>Save</Button>
        </FormLayout>
      </Card>
    </Page>
  );
}

export default AdminSettings;
